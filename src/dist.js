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
const contextData = React.createContext('name'); // React.createElement(contextName.Provider) - Who Provide Data
// React.createElement(contextName.Consumer) - Who Consume Data

function MyComponent1() {
  const myName = 'Samuel :)'; // i dont need to call "MyComponent3"

  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null, /*#__PURE__*/React.createElement("p", null, "Paragrafo do componente 2"), /*#__PURE__*/React.createElement(MyComponent3, null)));
}

function MyComponent2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null)));
}

function MyComponent3() {
  const [phone, setPhone] = React.useState("(81) 94002-8922");
  setTimeout(() => {
    setPhone("(11) 91234-5678");
  }, 2000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, {
    phone: phone
  }));
}

function MyComponent4(props) {
  const [seconds, setSeconds] = React.useState(0);
  setTimeout(() => {
    setSeconds(seconds + 1);
  }, 1000);
  return (
    /*#__PURE__*/
    // JS code run into { }
    React.createElement("div", {
      className: "component-4"
    }, /*#__PURE__*/React.createElement("p", null, "nome \xE9: ", props.name, " minha idade \xE9: ", props.age, " - sao: ", seconds, " - Telefone: ", props.phone))
  );
}

function MyComponent() {
  //React.createElement(element // function name, {Properties}, Children)
  //return React.createElement('div',null,'Hello world!!!')
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, null));
} //ReactDOM.render(element, place where it will render the elements)


ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.getElementById('app'));
