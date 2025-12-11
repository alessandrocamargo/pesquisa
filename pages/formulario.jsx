import { useEffect, useState} from "react";

function formulario(){
    const [perguntas, setPerguntas] = useState([]);
    const [respostas, setRespostas] = useState([]);

    // Carregar perguntas do localStorage 
    useEffect(() => {
        const p = JSON.parse(localStorage.getItem("perguntas")) || [];
        setPerguntas(p);
    }, []);

    

}