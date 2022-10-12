import React, { useState } from "react";
import { Search } from "@mui/icons-material";


export default function Buscar(props) {
  const [conteudo, setConteudo] = useState("");

  let classes = "input";
  if (conteudo) {
    classes += " input-expanded";
  }

  function handleOnChange(event) {
    setConteudo(event.target.value);
  }

  return (
    <div>
      <Search className="icon" />
      <input
        className={classes}
        placeholder="Buscar"
        value={conteudo}
        onChange={(event) => {
          handleOnChange(event);
        }}
      />
    </div>
  );
}