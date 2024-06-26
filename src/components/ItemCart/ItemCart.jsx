import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

export default function ItemCart({ product }) {
  const { image, name, price, quantity } = product;

  const { clearCart } = useContext(CartContext);

  const IGV = 0.18;

  const ccyFormat = (num) => {
    return `${num.toFixed(2)}`;
  };

  const priceRow = (quantity, price) => {
    return quantity * price;
  };

  const subtotal = (items) => {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  };

  const invoiceSubtotal = subtotal([product]);
  const invoiceTaxes = IGV * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <div className="flex flex-col shadow-sm items-center justify-center h-full text-center xl:mx-64 lg:mx-8 mx-0 dark:bg-white bg-gray-800 border-2 border-gray-200 rounded-md">
      <TableContainer component={Paper}>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Detalles
              </TableCell>
              <TableCell align="center">Precio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell className="flex justify-center">Descripción</TableCell>
              <TableCell align="center">Unidad</TableCell>
              <TableCell align="center">Suma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{quantity}</TableCell>
              <TableCell>
                <CardMedia
                  component="img"
                  alt={name}
                  image={image}
                  style={{
                    height: "150px",
                    width: "150px",
                    objectFit: "contain",
                    col: "1",
                  }}
                />
                {name}
              </TableCell>
              <TableCell align="center">{price}</TableCell>
              <TableCell align="center">
                {ccyFormat(priceRow(quantity, price))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="center">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>IGV</TableCell>
              <TableCell align="center">{`${(IGV * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="center">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="center">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-center gap-4">
        <Link to="/">
          <button className="p-2 bg-blue-400  hover:bg-blue-500 rounded-md my-2">
            Seguir Comprando
          </button>
        </Link>
        <button
          onClick={() => {
            clearCart;
          }}
          className="p-2 bg-yellow-400  hover:bg-yellow-500 rounded-md my-2"
        >
          Vaciar Carrito
        </button>
        <Link to="/checkout">
          <button className="p-2 bg-green-400  hover:bg-green-500 rounded-md my-2">
            Procesar Compra
          </button>
        </Link>
      </div>
    </div>
  );
}
