import Link from 'next/link';
import { useEffect, useState } from 'react';

const Breadcrumbs_Product = ({ businessId, businessName, productName }) => { 
    const [business, setBusiness] = useState('');

    useEffect(() => {
        if (businessName) {
            setBusiness(businessName);
            console.log('Business Name in Breadcrumbs:', businessName); // Log the business name
        }
    }, [businessName]);

    return (
        <nav className="breadcrumb">
            <ul className="flex space-x-2">
                <li>
                    <Link href="/">
                        <span className="text-blue-500">Home</span>
                    </Link>
                </li>
                <li>
                    <span className="mx-2">/</span>
                    <Link href="/businesses">
                        <span className="text-blue-500">Businesses</span>
                    </Link>
                </li>
                {businessId && business && (  // Ensure businessId and businessName are defined before rendering
                    <>
                        <li>
                            <span className="mx-2">/</span>
                            <Link href={`/business/${businessId}`}>
                                <span className="text-blue-500">{business}</span>
                            </Link>
                        </li>
                    </>
                )}
                {businessId && (  // Ensure businessId is defined before rendering Products link
                    <>
                        <li>
                            <span className="mx-2">/</span>
                            <Link href={`/products/${businessId}`}>
                                <span className="text-blue-500">Products</span>
                            </Link>
                        </li>
                    </>
                )}
                {productName && (
                    <li>
                        <span className="mx-2">/</span>
                        <span>{productName}</span> {/* Safely display the product name */}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Breadcrumbs_Product;
