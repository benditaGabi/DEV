import './App.css';
import logo from './logo-embracon.jpg';

function App() {


  const submitHandler = (e) => {
    e.preventDefault();
  }
 {/*} const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
console.log(data);*/}


  return (
    <div className="App">
       <div className='main'>
        <div className="center">
         
         <div className= "menu">
        
        <div className="logo">
          <h3>Porque sonhar não tem limites!</h3>
          <img src={logo} />

          </div>

        
        <div className="item-menu">
          <a href="#">Login</a>
        </div>
       </div>
        <div className="form">
        
        <h2>Fale Conosco!</h2>
          
          <form onSubmit={submitHandler}>
            
             <div className="items.form">

               <input placeholder="Seu nome ..." type="text"/>
               <input placeholder="Seu e-mail ..." type="text"/>
               {/*<input placeholder="Seu celular ..." type="text"/>*/}
               
              
               <input placeholder="Seu CEP ..." type="text" name="tracking" className="form.cep"/>
               
               <button type="submit" name="validaCEP">Buscar</button>
               <div className="botao">
               <input type="submit"/>
                </div>
             </div>

          </form>
        </div>
       </div>
       </div>
       <div className="conteudo">
        <div className="center">
          <div className="conteudo-single">
          <h3>Título da chamada</h3>
          <p>Aqui é meu conteúdo de exemplo para o produto novo da Embracon! Espero que você goste! :)
          </p>
          </div>
          <div className="conteudo-single">
          <h3>Título da chamada</h3>
          <p>Aqui é meu conteúdo de exemplo para o produto novo da Embracon! Espero que você goste! :)
          </p>
        </div>

       </div>
    </div>
    </div>
  );
}

export default App;
