import { IoWallet, IoPlay } from "react-icons/io5";
import Button from "../Button";

export default function ButtonAction() {
  return (
    <div className="flex gap-x-3 mt-10">
      <Button title="Live Demo" variant="outline-primary" icon={<IoPlay />} />
      <Button title="Beli Sekarang" icon={<IoWallet />} />
    </div>
  );
}
