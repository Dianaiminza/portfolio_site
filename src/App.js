import './App.css';
import{Layout,Header,Navigation,Content,Drawer}from 'react-mdl';
import Main from './components/main/Main';
import{ Link}from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
                <Link to="/">Resume</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Blog">Blog</Link>
            </Navigation>
        </Header>
        
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Resume</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Blog">Blog</Link> 
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"/>
            <Main/>
         
        </Content>
       
    </Layout>
    </div>
   
  );
}

export default App;
