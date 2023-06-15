import React from "react";
import { ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";


export const AdminFeatured = ({userData}) => {


    const studentTotal = userData.reduce((total, el) => {
      const Students = el.students;
      const totalStudents = parseInt(Students);
      return total + totalStudents;
    }, 0);
    
    const facultyTotal = userData.reduce((total, el) => {
      const Faculty = el.faculty;
      const totalFaculty = parseInt(Faculty);
      return total + totalFaculty;
    }, 0);
    
    console.log("stu",studentTotal)
    console.log("fac",facultyTotal)

    const totalUniversities = userData.length;
    
  
    return (
      <FeaturedContainer>
        <FeaturedItem>
          <FeaturedTitle>Universities</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>{totalUniversities}</FeaturedMoney>
            <FeaturedMoneyRate>
              <FeaturedIcon up={true} />
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Total number of Universities</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle>Students</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>{studentTotal}</FeaturedMoney>
            <FeaturedMoneyRate>
              <FeaturedIcon up={true} />
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Total number of students</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle>Faculty</FeaturedTitle>
          <FeaturedMoneyContainer>
            <FeaturedMoney>{facultyTotal}</FeaturedMoney>
            <FeaturedMoneyRate>
              <FeaturedIcon up={false} />
            </FeaturedMoneyRate>
          </FeaturedMoneyContainer>
          <FeaturedSub>Total number of faculty</FeaturedSub>
        </FeaturedItem>
      </FeaturedContainer>
    );
  };

  const FeaturedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 10px 20px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FeaturedIcon = styled(ArrowUpward)`
  font-size: 14px;
  color: ${({up}) => (up ? "green" : "red")};
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;