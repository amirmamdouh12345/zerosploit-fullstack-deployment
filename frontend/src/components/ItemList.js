import React, { useEffect, useState } from "react";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/items")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch items");
                }
                return response.json();
            })
            .then(data => setItems(data))
            .catch(error => console.error("Error fetching items:", error));
    }, []);

    return (
        <div>
            <h2>Items from Backend</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;

