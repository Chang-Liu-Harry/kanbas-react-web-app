import React, { useState } from "react";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };

    return (
        <div id="wd-array-state-variables" className="p-3">
            <h2>Array State Variable</h2>
            <button
                onClick={addElement}
                className="btn btn-success mb-3"
            >
                Add Element
            </button>
            <table className="table table-bordered">
                <tbody>
                    {array.map((item, index) => (
                        <tr key={index}>
                            <td className="d-flex justify-content-between align-items-center">
                                <span className="fw-bold">{item}</span> {/* Boldened digit */}
                                <button
                                    onClick={() => deleteElement(index)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr style={{ width: '100vw', marginLeft: '-15px' }} /> {/* Full-width horizontal line */}
        </div>
    );
}
