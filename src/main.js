            //div - app 

            /////////////////////////////////////////////////////////////////////////////////////////
            //  One Way data flow - data can only flow in one direction, for "down", of Parent to children  //
            //  Fluxo de dados unilateral - os dados só podem fluir em uma direção, para "baixo", de pai para filho  //

            // 0 -> 1 -> 2 -> 3 -> 4

            // But the React can broke this flow, you can pass properties (params) for the components (functions) of behind (Parents), of children to parents.

            //  Context API - we can break the flow and send data from any parent to any child or the other way around, and we don't need to go through all the parent's components until we reach the final children for example  
            //  Context API - podemos interromper o fluxo e enviar dados de qualquer pai para qualquer filho ou vice-versa, e não precisamos passar por todos os componentes do pai até chegarmos aos filhos finais, por exemplo
            /////////////////////////////////////////////////////////////////////////////////////////
            // JSX - is a syntax for JS with React similar to HTML
            // JSX - é uma sintaxe para JS com React semelhante ao HTML
            /////////////////////////////////////////////////////////////////////////////////////////
            // Composition - send data from parents directly to children, without having to go through another component
            // Composition - envia dados dos pais diretamente para os filhos, sem ter que passar por outro componente
            
            // Ex: 1 -> 4
            /////////////////////////////////////////////////////////////////////////////////////////
            // Hooks - are functions that let you “hook into” React state and lifecycle features from function components. 
            // Ganchos - são funções que permitem que você "conecte" o estado React e os recursos de ciclo de vida dos componentes de função.

            const contextData = React.createContext('name')

            // React.createElement(contextName.Provider) - Who Provide Data
            // React.createElement(contextName.Consumer) - Who Consume Data

            function MyComponent1(){

                const myName = 'Samuel :)'
// i dont need to call "MyComponent3"
                return (

                        <div className="component-1">
                            <MyComponent2>
                                <p>Paragrafo do componente 2</p>
                                <MyComponent4 name={myName} age="16"/>
                            </MyComponent2>
                        </div>
                ) 
            }

            function MyComponent2(props){

                return (

                    <div className="component-2">
                       <div>
                       <header>
                            {props.children}
                        </header>
                        <footer>

                        </footer>
                        </div> 
                    </div>
                ) 
            }

            function MyComponent3(){

                return (
                
                    <div className="component-3">
                        <MyComponent4/>
                    </div>
                )
            }

            function MyComponent4(props){
                
                const [seconds, setSeconds] = React.useState(0);

                setTimeout(()=>{
                    setSeconds(seconds+1)
                },1000)

                return(
// JS code run into { }
                        <div className="component-4">
                            <p>nome é: {props.name} minha idade é: {props.age} - sao: {seconds}</p>
                        </div>
                )
            }

            function MyComponent(){

                //React.createElement(element // function name, {Properties}, Children)

               //return React.createElement('div',null,'Hello world!!!')

                return(

                    <div id="components">
                        <MyComponent1/>
                    </div>
                )
            }
            
            //ReactDOM.render(element, place where it will render the elements)

            ReactDOM.render(

                <MyComponent/>,
                    document.getElementById('app')

            )            