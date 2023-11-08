import { Table, Progress, Anchor, Text, Group } from '@mantine/core';
import classes from './JobTable.module.css';
import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/firebase.js';
import { ref, onValue } from "firebase/database"

const data = [];

export function JobTable() {

  const [data, setData] = useState([]);


  useEffect(() => {
    const databaseRef = ref(database, 'JobPostings');
    onValue(databaseRef, (snapshot) => {
      const dbData = snapshot.val();
      const dataArray = Object.keys(dbData).map((key) => dbData[key]);
      setData(dataArray);
    });
  }, []);




  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.company_name}>
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
          Button
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
