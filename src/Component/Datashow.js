import React, { useEffect, useState } from 'react'

const Datashow = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getData();

        async function getData() {
            const response = await fetch("https://www.anapioficeandfire.com/api/books");
            const data = await response.json();
            console.log(data)

            setBooks(data);
        }
    }, []);


    return (
        <>
            <h1 className="text-center  text-info">Fetch api book store</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">isbn</th>
                        <th scope="col">Number</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((curElem, ind) => {
                            return (
                                <tr key="ind">

                                    <td>1</td>
                                    <td>{curElem.name}</td>
                                    <td>{curElem.isbn}</td>

                                    <td>{curElem.numberOfPages}</td>
                                    <td><button className='btn btn-success'>Update </button> </td>
                                    <td><button className='btn btn-danger'>Delete</button>  </td>
                                </tr>
                            )
                        }
                        )}
                </tbody>
            </table>
        </>
    )
}

export default Datashow;