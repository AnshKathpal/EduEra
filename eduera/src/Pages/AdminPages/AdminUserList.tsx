// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { DeleteOutline } from '@material-ui/icons';
// import axios from 'axios';

// import { useAppDispatch, useAppSelector } from "../../redux/store";
// import { getUniversities, postUniversities } from "../../redux/University/api";
// import { AppAction } from "../../redux/University/action";

// import AdminSidebar from '../../Components/AdminComponents/adminSidebar';
// import { useLocation, useSearchParams } from "react-router-dom";


// const AdminUserList = () => {





// const dispatch = useAppDispatch();
//   const universities = useAppSelector(
//     (store) => store.universitiesReducer.data
//   );
//   const [searchParams] = useSearchParams();
//   const location = useLocation()

//   console.log(universities);

//   const fetchData = async () => {
//     try {

//       const getUniversityParams = {
//         params: {
//           country: searchParams.getAll("country"),
//           place: searchParams.getAll("place"),
//         },
//       };

//       const universities = await getUniversities(getUniversityParams);
//       const action: AppAction = {
//         type: "GET_UNIVERSITY_SUCCESS",
//         payload: universities || [],
//       };
//       dispatch(action);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (universities.length === 0 || location) {
//       fetchData();
//     }
//   }, [location.search]);

//   const filteredUniversities = universities.filter(
//     (university) =>
//       (searchParams.has("country")
//         ? university.country === searchParams.get("country")
//         : true) &&
//       (searchParams.has("place")
//         ? university.place === searchParams.get("place")
//         : true)
//   );
//   return (
//     <DIV>
//     <AdminSidebar />
//     <TheList >
//       {/* <DataGrid
//         rows={universities}
//         disableSelectionOnClick
//         // columns={columns}
//         pageSize={10}
//         checkboxSelection
//       /> */}

      
//     </TheList>
//     </DIV>
//   );
// };

// export default AdminUserList;

// const DIV = styled.div`
// display:flex
// `
// export const TheList = styled.div`
//   flex: 4;
//   height: 650;
//   width: '100%';
// `;
// export const ListItem = styled.div`
//   display: flex;
//   align-items: center;
// `;
// export const ListImage = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-right: 10px;
// `;
// export const EditButton = styled.button`
//   border: none;
//   border-radius: 10px;
//   padding: 20px 20px;
//    background-color: ${(props) => (props.primary ? 'DarkMagenta' : 'SeaGreen')};
//   color: white;
//   cursor: pointer;
//   margin-right: 20px;
// `;
// export const MyDeleteOutline = styled(DeleteOutline)`
//   color: red;
//   cursor: pointer;
// `;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { DeleteOutline } from '@material-ui/icons';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getUniversities, postUniversities } from "../../redux/University/api";
import { AppAction } from "../../redux/University/action";
import AdminSidebar from '../../Components/AdminComponents/adminSidebar';
import { useLocation, useSearchParams } from "react-router-dom";
import { deleteProduct } from '../../redux/AdminReducer/api';
import { DeleteIcon } from '@chakra-ui/icons';




const AdminUserList = () => {
  const dispatch = useAppDispatch();
  const universities = useAppSelector(
    (store) => store.universitiesReducer.data
  );
  const [allProducts, setAllProducts] = useState(universities);
  const [filteredUniversities, setFilteredUniversities] = useState(universities);

  const [searchParams] = useSearchParams();
  const location = useLocation()
  
  console.log(universities);

  const fetchData = async () => {
    try {
      const getUniversityParams = {
        params: {
          country: searchParams.getAll("country"),
          place: searchParams.getAll("place"),
        },
      };

      const universities = await getUniversities(getUniversityParams);
      const action: AppAction = {
        type: "GET_UNIVERSITY_SUCCESS",
        payload: universities || [],
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (universities.length === 0 || location) {
      fetchData();
    }
  }, [location.search]);
  useEffect(() => {
    setFilteredUniversities(universities);
    setAllProducts(universities);
  }, [universities]);


  const filteredData = filteredUniversities.filter(
    (university) =>
      (searchParams.has("country")
        ? university.country === searchParams.get("country")
        : true) &&
      (searchParams.has("place")
        ? university.place === searchParams.get("place")
        : true)
  );
  const handelDelete = (id: number) => {
    deleteProduct(id)
      .then(() => {
      
        const newFilteredUniversities = filteredUniversities.filter(
          (university) => university.id !== id
        );
        const newAllProducts = allProducts.filter((product) => product.id !== id);
        setFilteredUniversities(newFilteredUniversities);
        setAllProducts(newAllProducts);
  
  
  
  
      })
      .catch((error) => {
        console.error("Failed to delete product:", error);
      });

     
  };

  
  console.log(allProducts);
  return (
    <DIV>
      <AdminSidebarWrapper>
        <AdminSidebar />
      </AdminSidebarWrapper>
      <TheList>
        {/* Replace the DataGrid component with your desired alternative */}
        <table>
          <thead>
            <tr>
              {/* <th>ID</th>
              <th>User</th>
              <th>Country</th>
              <th>Students</th>
              <th>Rating</th>
              <th>Action</th> */}
               <TableHeader>ID</TableHeader>
              <TableHeader>User</TableHeader>
              <TableHeader>Country</TableHeader>
              <TableHeader>Students</TableHeader>
              <TableHeader>Rating</TableHeader>
              <TableHeader>Action</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((university) => (
              <tr key={university.id}>
                <td>{university.id}</td>
                <td>
                  <ListItem>
                    <ListImage src={university.images} alt="image" />
                    {university.name}
                  </ListItem>
                </td>
                <td>{university.country}</td>
                <td>{university.students}</td>
                <td>{university.rating}</td>
                <td>
                  <Link to={`/adminuni/${university.id}`}>
                    <EditButton primary>Edit</EditButton>
                  </Link>
                  <DeleteIcon onClick={() => handelDelete(university.id!)} />
                  {/* <MyDeleteOutline
                    onClick={() => handelDelete(university.id!)}
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TheList>
    </DIV>
  );
};

export default AdminUserList;

const DIV = styled.div`
  display: flex;
  width:100%;
  
`;

export const TheList = styled.div`
  margin-left:200px;
  height: 650;
  width: '100%';
  padding:50px
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding:30px;

  td {
    padding: 20px;
  };
  
`;
export const TableHeader = styled.th`
  padding: 10px 20px; /* Adjust the padding as needed */
`;
export const ListImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const AdminSidebarWrapper = styled.div`
  flex: 1;
  position: fixed;
  top: 0;
`;
export const EditButton = styled.button<{ primary?: boolean }>`
  border: none;
  border-radius: 10px;
  padding: 20px 20px;
  background-color: ${(props) => (props.primary ? 'DarkMagenta' : 'SeaGreen')};
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
/* 
export const MyDeleteOutline = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`; */
