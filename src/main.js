            //div - app 

            
            //  One Way data flow - data can only flow in one direction, for "down", of Parent to children  //  Fluxo de dados unilateral - os dados só podem fluir em uma direção, para "baixo", de pai para filho  //

            // 0 -> 1 -> 2 -> 3 -> 4

            // But the React can broke this flow, you can pass properties (params) for the components (functions) of behind (Parents), of children to parents.

            //  Context API - we can break the flow and send data from any parent to any child or the other way around, and we don't need to go through all the parent's components until we reach the final children for example  //  API de contexto - podemos interromper o fluxo e enviar dados de qualquer pai para qualquer filho ou vice-versa, e não precisamos passar por todos os componentes do pai até chegarmos aos filhos finais, por exemplo



            const contextData = React.createContext('name')

            // React.createElement(contextName.Provider) - Who Provide Data
            // React.createElement(contextName.Consumer) - Who Consume Data

            function MyComponent1(){

                const myName = 'Ayrton '

                return (

                    React.createElement(contextData.Provider, {
                        
                        value: {
                                name: myName,
                                age: 16
                            }
                        },

                        React.createElement('div', {className: 'component-1'},

                            React.createElement(MyComponent2)
                        )
                    )
                ) 
            }

            function MyComponent2(){

                return (
                    
                    React.createElement('div', {className: 'component-2'},
                        React.createElement(MyComponent3)
                    )
                ) 
            }

            function MyComponent3(){

                return (
                    
                    React.createElement('div', {className: 'component-3'},
                        React.createElement(MyComponent4)
                    )
                ) 
            }

            function MyComponent4(){

                return (
                    
                    React.createElement(contextData.Consumer, null, 
                    
                        (nameContext) => (

                            React.createElement('div', {className: 'component-4'},
                             React.createElement('p',null,"nome é: "+nameContext.name+" minha idade é: "+nameContext.age))

                        )
                    )
                ) 
            }

            function MyComponent(){

                //React.createElement(element // function name, {Properties}, Children)

               //return React.createElement('div',null,'Hello world!!!')

               return ( 
                   
                    React.createElement('div', {id: 'components'},
                        React.createElement(MyComponent1))
                )
            }
            
            //ReactDOM.render(element, place where it will render the elements)

            ReactDOM.render(

                React.createElement(MyComponent),
                    document.getElementById('app')

            )