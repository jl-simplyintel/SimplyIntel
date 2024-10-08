export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Set default role to 'guest'
    const role = 'guest';

    // Keystone's `createUser` mutation
    const mutation = `
      mutation CreateUser($name: String!, $email: String!, $password: String!, $role: String!) {
        createUser(data: { name: $name, email: $email, password: $password, role: $role }) {
          id
          name
          email
          role
        }
      }
    `;

    // Variables to be sent in the GraphQL request
    const variables = {
      name,
      email,
      password, // Pass the plain password to Keystone
      role,
    };

    // Log the variables to confirm they're being set correctly
    console.log('Variables being sent to Keystone GraphQL:', variables);

    // Send the GraphQL request to Keystone's endpoint
    const response = await fetch('https://companynameadmin-008a72cce60a.herokuapp.com/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: mutation,
        variables: variables,
      }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error('Keystone GraphQL errors:', result.errors); // Log the full error response
      return res.status(400).json({ error: result.errors[0].message || 'Failed to register. Please try again.' });
    }

    // Respond with success
    return res.status(201).json({ message: 'User registered successfully', user: result.data.createUser });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
