import React from 'react'
import Table from 'react-bootstrap/Table'

function ProductTable(){
    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ProductID</th>
                    <th>Category</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>SKU</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>22757</td>
                    <td>Clubs</td>
                    <td>Berry Clubs</td>
                    <td>$279.99</td>
                    <td>43</td>
                    <td>#909849141</td>
                </tr>

                <tr>
                    <td>22758</td>
                    <td>Clubs</td>
                    <td>Jackson Club</td>
                    <td>$399.99</td>
                    <td>15</td>
                    <td>#904194184</td>
                </tr>

                <tr>
                    <td>22759</td>
                    <td>Golf Balls</td>
                    <td>Bridgestone (3 Pack)</td>
                    <td>$8.99</td>
                    <td>120</td>
                    <td>#91904919</td>
                </tr>

                <tr>
                    <td>22760</td>
                    <td>Golf Balls</td>
                    <td>Srixon</td>
                    <td>$12.99</td>
                    <td>70</td>
                    <td>#919049187</td>
                </tr>

                <tr>
                    <td>22761</td>
                    <td>Golf Balls</td>
                    <td>Chromax</td>
                    <td>$14.99</td>
                    <td>90</td>
                    <td>#91904989</td>
                </tr>

                <tr>
                    <td>22762</td>
                    <td>Golf Balls</td>
                    <td>Taylor Made</td>
                    <td>$29.99</td>
                    <td>20</td>
                    <td>#91904312</td>
                </tr>

            </tbody>

        </Table>
    )
}

export default ProductTable