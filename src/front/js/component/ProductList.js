import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Asegúrate de importar ProductCard

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.products);
                } else {
                    console.error("Error al obtener productos");
                }
            } catch (error) {
                console.error("Hubo un problema con la solicitud de productos:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={(product) => console.log("Producto agregado al carrito:", product)}
                    />
                ))
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    );
};

export default ProductList;
