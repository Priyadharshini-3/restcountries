// CONSTRUCTOR

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor : "red"};
    }
    render(){
        return(
            <h1>My FavoriteColor is{this.state.favoritecolor}</h1>
        );
    }
}
ReactDOM.render(<Header/>,document.getElementById('root'));


// GETDERIVEDSTATEFROMPROPS

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor : "red"};
    }
    static getDerivedStateFromProps(props,state){
        return{favoritecolor : props.favcol};
    }
    render(){
        return(
            <h1>My FavoriteColor is{this.state.favoritecolor}</h1>
        );
    }
}
ReactDOM.render(<Header favcol="yellow"/>,document.getElementById('root'));


// RENDER

class Header extends React.Component{
    render(){
        return(
            <h1>This is the content of the Header Component</h1>
        );
    }
}
ReactDom.render(<Header/>,document.getElementById('root'));


// COMPONENTDIDMOUNT

class Header extends React.Component{
    constructor(props){
    super(props);
    this.state={favoritecolor:"red"};
    }
    ComponentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"yellow"})
        },1000)
        }
        render(){
            return(
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            );
        }
    }
ReactDOM.render(<Header/>,document.getElementById('root'));

document.getelelmentbyid