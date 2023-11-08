import { Table, Progress, Anchor, Text, Group, Button } from '@mantine/core';
import classes from './JobTable.module.css';
import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/firebase.js';
import { ref, onValue } from "firebase/database"

const data = [];

export function JobTable({ searchQuery }) {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const databaseRef = ref(database, 'JobPostings');
    onValue(databaseRef, (snapshot) => {
      const dbData = snapshot.val() || {};
      const dataArray = Object.keys(dbData).map((key) => ({
        ...dbData[key],
        id: key // Save the key as part of the object for React key purposes
      }));
      setData(dataArray);
      setFilteredData(dataArray); // Initialize filteredData with all data initially
    });
  }, []);


useEffect(() => {
    if (searchQuery) {
      const searchLowerCase = searchQuery.toLowerCase();
      const filtered = data.filter((item) => 
        item.company_name.toLowerCase().includes(searchLowerCase) ||
        item.role.toLowerCase().includes(searchLowerCase) ||
        item.location.toLowerCase().includes(searchLowerCase)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // If searchQuery is empty, show all data
    }
  }, [searchQuery, data]); // This effect runs when searchQuery or data changes


  const rows = filteredData.map((row) => {
    return (
      <Table.Tr key={row.id}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.company_name}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.date_posted}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.role}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.location}</Table.Td>
        <Table.Td>
          <Button>Link</Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Company</Table.Th>
            <Table.Th>Date Posted</Table.Th>
            <Table.Th>Position</Table.Th>
            <Table.Th>Location</Table.Th>
            <Table.Th>Apply</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
