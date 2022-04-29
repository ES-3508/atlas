import React from 'react'
import "./sidebar.css"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';
import status from "../../../../../images/green_button.png";
import profile from "../../../../../images/operator/operator.jpg";
import { Link } from "react-router-dom";
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import HomePA04  from  "../../PA04Page/pa04home"




export default function Sidebar() {
  var showdate = new Date();
  var displaytodaysdate = showdate.getDate() + ' ' + (showdate.getMonth() + 1) + ' ' + showdate.getFullYear();
  var date = showdate.toDateString();
  return (
    <div>
      <div
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/tables" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">
                  Analytics
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                exact
                to="/hero404"
                target="_blank"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  404 page
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>

        <HomePA04/>
      </div>

     

     



    </div>
  )
}
