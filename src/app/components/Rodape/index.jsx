import Image from "next/image";

export default function Rodape () {
  return (
    <footer>
      <Image src={""} title="Logo" alt="Logo"/>
      <div>
        <div>
          <h3>Endereço</h3>
          <p>Av. Qualquer Uma, 200</p>
          <p>Marília-SP 17507-000</p>
        </div>

        <div>
          <h3>Contao</h3>
          <p>Av. Qualquer Uma, 200</p>
          <p>Marília-SP 17507-000</p>
        </div>
      </div>
    </footer>
  )
}
