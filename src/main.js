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
            /////////////////////////////////////////////////////////////////////////////////////////
            //lifting state up - In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it.
            //elevar o state - No React, o compartilhamento do state é alcançado ao movê-lo para o elemento pai comum aos componentes que precisam dele. Isso se chama. 
            

            const contextData = React.createContext('name')

            // React.createElement(contextName.Provider) - Who Provide Data
            // React.createElement(contextName.Consumer) - Who Consume Data

            function MyComponent1(props){

                const myName = 'Samuel :)'
// i dont need to call "MyComponent3"
                return (

                        <div className="component-1">
                            <MyComponent2>
                                <p>Paragrafo do componente 2</p>
                                <MyComponent3 incrementOnClik={props.incrementOnClik}/>
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

            function MyComponent3(props){

                const [phone, setPhone] = React.useState("(81) 94002-8922")

                setTimeout(()=>{
                    setPhone("(11) 91234-5678")
                },2000)

                return (
                
                    <div className="component-3">
                        <MyComponent4 phone={phone} incrementOnClik={props.incrementOnClik}/>
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
                            <p>nome é: {props.name} minha idade é: {props.age} - sao: {seconds} - Telefone: {props.phone}</p>

                            <footer>
                                <button type="button" onClick={props.incrementOnClik}>Incrementar</button>
                            </footer>
                        </div>
                )
            }

            function MyComponent(props){

                //React.createElement(element // function name, {Properties}, Children)

               //return React.createElement('div',null,'Hello world!!!')

                return(

                    <div id="components">
                        <MyComponent1 incrementOnClik={props.incrementOnClik}/>
                    </div>
                )
            }

            function MyBrotherComponent(props){

                return (
                    <div>
                        <MyBrotherComponent2 counter = {props.counter}/>
                    </div>                        
                )
            } 

            function MyBrotherComponent2(props){

//                React.useEffect(() => {
//                    effect
//                    return () => {
//                        cleanup
//                    }
//                }, [input])

                    React.useEffect(function(){

                        localStorage.setItem('counter', props.counter)
                    });

                return (

                    <h2>
                        Contador: {props.counter}
                    </h2>
                )
            }

            function MyApp(){

                const [counter, setCounter] = React.useState(parseInt(localStorage.getItem('counter'), 10) || 0)

                const increment = function(){
                    setCounter(counter + 1)
                }

                //React.Fragment - is a React component that can return more than 1 component, not needing a container like a <div> </div>
                //React.Fragment - é um componente React que pode retornar mais de 1 componente, não precisando de um contêiner como um <div> </div>

                return(
                    <React.Fragment>
                            <MyComponent incrementOnClik={increment}/>
                            <MyBrotherComponent  counter={counter}/>
                    </React.Fragment>
                )
            }
            
            //ReactDOM.render(element, place where it will render the elements)

            ReactDOM.render(

                <MyApp/>,
                    document.getElementById('app')

            )            