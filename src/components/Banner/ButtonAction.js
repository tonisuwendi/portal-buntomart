import { IoWallet } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import Button from "../Button";

export default function ButtonAction() {
  return (
    <div className="flex justify-center gap-x-4 mt-10">
      <Button
        title="Lihat Demo"
        variant="outline-primary"
        size="lg"
        icon={<IoPlay />}
      />
      <Button title="Beli Sekarang" size="lg" icon={<IoWallet />} />
    </div>
  );
}
