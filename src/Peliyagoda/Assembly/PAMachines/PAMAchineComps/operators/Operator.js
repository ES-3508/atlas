import React, { useState } from 'react';
import axios from 'axios';
import Photos from './Photo';
import Search from './Search';
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const Operator = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            epfNum:'',
            photo: ''
        }
    );
    const [operators,setOperators]=useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('name', newUser.name);
        formData.append('epfNum',newUser.epfNum)

        axios.post('http://192.168.8.110:5000/users/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
        axios.get("http://192.168.8.110:5000/users/img")
        .then(res => res.json())
        .then(data=> this.setOperators({data}))
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <div>

        
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                 <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                     onChange={handlePhoto}
                 />

                <input 
                    type="text"
                    placeholder="name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="epfNum"
                    name="epfNum"
                    value={newUser.epfNum}
                    onChange={handleChange}
                />

                <input 
                    type="submit"
                />
            </form>

            
            <Photos/>
            
        </div>

        
    );
}

export default Operator;