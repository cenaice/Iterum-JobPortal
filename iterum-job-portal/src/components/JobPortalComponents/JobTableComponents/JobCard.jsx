import { Paper, Group, Text, SimpleGrid, Button } from '@mantine/core';
import classes from './JobCard.module.css';
import React, { useState, useEffect } from 'react';
import { database } from '../../../firebase/firebase';
import { ref, onValue } from 'firebase/database';

export function JobCard({ searchQuery }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const databaseRef = ref(database, 'JobPostings');
    onValue(databaseRef, (snapshot) => {
      const dbData = snapshot.val() || {};
      const dataArray = Object.keys(dbData).map((key) => ({
        ...dbData[key],
        id: key
      }));
      setData(dataArray);
      setFilteredData(dataArray);
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
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  const jobCards = filteredData.map((job) => {
    return (
      <Paper withBorder p="md" radius="md" key={job.id} className={classes.jobCard}>
        <Text size="lg" weight={500}>{job.company_name}</Text>
        <Text size="md">{job.role}</Text>
        <Text size="sm" color="dimmed">{job.location}</Text>
        <Button mt="md">Apply</Button>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, xs: 1, md: 1 }}>
        {jobCards}
      </SimpleGrid>
    </div>
  );
}