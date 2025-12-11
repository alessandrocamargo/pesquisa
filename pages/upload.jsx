import { useState } from 'react';

function upload(){
    const [perguntas, setPerguntas] = useState([]);

    const handleArquivo = async(e) => {
        const file = e.target.files[0];
        if(!file) return;

        const ext = file.name.split(".").pop();

        if(ext === "json"){
            const conteudo = await file.text();
        }
        else if (ext === "txt"){
            const conteudo = await file.text();
            const linhas = conteudo.split("\n").map(line => line.trim()).filter(line => line);
            setPerguntas(linhas);
        }
        else {
            alert("Formato de arquivo não suportado. Use .json ou .txt");
        }

        localStorage.setItem("perguntas", JSON.stringify(perguntas));
    }
    return(
        <div>
            <h3>Importar Perguntas</h3>
            <input type="file" className='form-control' onChange={handleArquivo} />

            <h5 className='mt-3'>Perguntas Carregadas:</h5>
            <ul className='list-group'>
                {
                   perguntas.map((p,i) => 
                    (
                        <li className='list-group-item'>{p}</li>
                    )
                   )
                }
            </ul>
        </div>
    );
}

export default upload;