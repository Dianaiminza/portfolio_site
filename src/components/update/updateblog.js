import React, { Component } from "react";
import { Row, Form, Col, Button,FormGroup,Label,Input } from 'reactstrap';
import axios from 'axios';
const BaseapiUrl = 'http://localhost:5000/blogs/edit';
class UpdateBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            description:'',
            url:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        var blogid = this.props.match.params.id;
       this.GetBlogById(blogid);
      
    }
    GetBlogById(blogid) {
        axios.get(`http://localhost:5000/blogs/`+blogid)
        .then((res) => {
          console.log(res)
          if (res) {
            this.setState({
                title: res.title,
                description:res.description,
                url:res.url
            });
        }
        else {
            alert("blog record not found!")
        }
        }).catch(err => {
            this.setState({ IsApiError: true });
          });      
    }
    SubmitBlog = (event) => {
      event.preventDefault()
        if (this.state.title === "" || this.state.title === undefined) {
            alert("blog title is required");
        } else if (this.state.url ==="" || this.state.url === undefined) {
            alert("url is required");
        } 
        else if (this.state.description ==="" || this.state.description === undefined) {
            alert("description is required");
        } 
        
        let body = {
            title: this.state.title,
            url: this.state.url,
            description:this.state.description,
        };
        const requestOptions = {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = BaseapiUrl + "/"+this.props.match.params.id
        fetch(baseurl, requestOptions)
            .then((res) => {
                console.log(res)
                if (res) {
                    alert("Updated successfully!");
                }else{
                    alert("Update failed")
                }
            }).catch(err => {
                console.log('Error updating', err);
              });    
    }
    render() {
        return (
            <div>
                <h1>Edit Blog</h1>
                <Row>
                    <Col sm={8}>
                         <Form onSubmit={this.SubmitBlog}>
                         <FormGroup>
                           
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" placeholder="description" value={this.state.description} onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="url">Url</Label>
        <Input type="text" name="url" id="url" placeholder="url" value={this.state.url} onChange={this.handleChange}/>
      </FormGroup>
      
                          <FormGroup>
                                <Button variant="success" type="submit">Save</Button>
                            </FormGroup>
                        </Form> 
                    </Col>
                </Row>
            </div>
        )

    }
}
export default UpdateBlog;


