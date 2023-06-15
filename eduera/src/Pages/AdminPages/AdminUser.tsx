import {Star, LocationSearching, MailOutline, PermIdentity,Publish } from "@material-ui/icons";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// import AdminSidebar from "../../components/AdminParts/AdminSidebar";

export default function AdminUser () {
    const {id} = useParams();
    const [data,setData] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios.get(`https://mu9umx-8080.csb.app/admin/${id}`);
          console.log("res",response.data)
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
    useEffect(() => {
        fetchData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://mu9umx-8080.csb.app/admin/${id}`, data);
            console.log(response.data);
            fetchData(); // refresh data after update
        } catch (error) {
            console.error(error);
        }
    };
   
    return (
        <DIV>
            <AdminSidebar />
        <ItemContainer>
            <ItemTitleContainer>
                <h1>Edit Details</h1>
                <Link to="/newUser">
                    <ItemAddButton>Create</ItemAddButton>
                </Link>
            </ItemTitleContainer>
            <UserContainer>
                <ShowUser>
                    <ShowUserTop>
                        <ItemShowImg
                            src={data.images}
                            alt="show-image"
                        />
                        <ShowTopTitle>
                            <FontWeight bolder>{data.name}</FontWeight> 
                            <FontWeight>{data.country}</FontWeight>  
                        </ShowTopTitle>
                    </ShowUserTop>
                    <ShowUserBottom>
                        <UserShowTitle>University Details</UserShowTitle>
                        <UserShowInfo>
                            <PermIdentity className="showIcon" />
                            <span className="showInfoTitle">{data.faculty}</span> 
                        </UserShowInfo>
                        <UserShowInfo>
                            <PermIdentity className="showIcon" />
                            <span className="showInfoTitle">{data.students}</span> 
                        </UserShowInfo>
                        <UserShowTitle>Other Details</UserShowTitle>
                        <UserShowInfo>
                            <LocationSearching className="showIcon" />
                            <span className="showInfoTitle">{data.place}</span> 
                        </UserShowInfo>
                        <UserShowInfo>
                            <Star className="showIcon" />
                            <span className="showInfoTitle">{data.rating}</span>
                        </UserShowInfo>
                        <UserShowInfo>
                            <PictureAsPdfIcon className="showIcon" />
                            <span className="showInfoTitle">{data.brochure}</span> 
                        </UserShowInfo>
                    </ShowUserBottom>
                </ShowUser>
                <UpdateUser>
                    <UpdateTitle>Edit</UpdateTitle>
                    <UpdateForm onSubmit={handleSubmit}>
                        <div>
                            <UpdateItem>
                                <label>Name</label>
                                <input
                                    type="text"
                                    placeholder="UserName"
                                    value={data.name || ''}
                                    name="name"
                                    onChange={handleInputChange}
                                />
                            </UpdateItem>
                        
                            <UpdateItem>
                                <label>Faculty</label>
                                <input
                                type="number"
                                placeholder="faculty number"
                                value={data.faculty || ''}
                                name="faculty"
                                onChange={handleInputChange}
                            />
                        </UpdateItem>
                        <UpdateItem>
                            <label>Students</label>
                            <input
                                type="number"
                                placeholder="students number"
                                value={data.students || ''}
                                name="students"
                                onChange={handleInputChange}
                            />
                        </UpdateItem>
                        <UpdateItem>
                            <label>Rating</label>
                            <input
                                type="text"
                                placeholder="rating"
                                value={data.rating || ''}
                                name="rating"
                                onChange={handleInputChange}
                            />
                        </UpdateItem>
                    </div>
                    <UpdateRight>
                        <ItemUpload>
                            <ItemUploadImg
                                src={data.images || ''}
                                alt="upload-img"
                            />
                            <label htmlFor="file">
                                <MyPublish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </ItemUpload>
                        <ItemUpdateButton type="submit">Update</ItemUpdateButton>
                    </UpdateRight>
                </UpdateForm>
            </UpdateUser>
        </UserContainer>
    </ItemContainer>
    </DIV>
);
    }

    const DIV = styled.div`
    display:flex
    `

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`
const ShowUser = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const UpdateUser = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
`
const ShowUserTop = styled.div`
    display: flex;
    align-items: center;
`
const ShowUserBottom = styled.div`
    margin-top: 20px;
`
const ShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`
const FontWeight = styled.span`
    font-weight: ${props => props.bolder ? "600" : "300"};
`
const UserShowTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`
const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
    .showIcon{
        font-size: 16px !important;
    }
    .showInfoTitle{
        margin-left: 10px;
    }
`
const UpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`
const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    label{
        margin-bottom: 5px;
        font-size: 14px;
    }
    input{
        border: none;
        width: 250px;
        height: 30px;
        border-bottom: 1px solid gray;
    }
`
const UpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MyPublish = styled(Publish)`
    cursor: pointer;
`

export const ItemContainer = styled.div`
    flex: 4;
    padding: 20px;
`
export const ItemTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ItemAddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: indigo;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
`
export const ItemShowImg = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: ${props => props.mr ? "20px" : "0px"};
`
export const ItemUploadImg = styled.img`
    width: 70%;
    height: 90%;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 40px;
    margin-bottom:40px;
`
export const ItemUpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: midnightblue;
    color: white;
    font-weight: 600;
    width:50%;
    margin-left: 80px;
`
export const ItemUpload = styled.div`
    display: flex;
    align-items: center;
`