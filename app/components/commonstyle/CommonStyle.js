import React from "react";
import styled from "styled-components/native";

export const ButtonWrapper = styled.TouchableOpacity`
width:320;
padding-top:20;
background-color:#3370E7;
border-radius:100;
padding-top:16;
padding-bottom:16;
margin-top:30;
`;
export const Drawer = styled.View`

`;
export const NavigationItem = styled.TouchableOpacity`
 display:flex;
 flex-direction:row;
 alignItems:center;
 padding:20px 0px;
`;
export const CourseSingleItem = styled.TouchableOpacity`
 display:flex;
 flex-direction:row;
 alignItems:flex-start;
`;
export const Divider = styled.View`
 display:flex;
 height:1;
 margin-top:20px;
 margin-bottom:20px;
 background-color:#a2a3a7;
`;

export const UserProfile = styled.View`
 display:flex;
 height:130;
 flex-direction:row;
 alignItems:center;
 background-color:#E6E7EC;
 border-radius:3px;
 border:solid 1px #ddd;
 margin-bottom:15;
 padding-left:20px;
`;
