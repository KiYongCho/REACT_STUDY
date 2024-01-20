// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install @fontsource/roboto
// npm install @mui/icons-material

import Button from '@mui/material/Button';
import Autocomplete from  '@mui/material/Autocomplete';
import TextField from  '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { BarChart } from '@mui/x-charts/BarChart';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {useState} from 'react';

export default function App() {
  
  const [count, setCount] = useState(0);

  const ops = ['가', '가가', '가가가가가', '엄', '준식', '엄준식'];

  return (
    <div>
      <p><Button variant="contained" onClick={()=>setCount(count+1)}>버튼</Button></p>
      <p>{count}</p>
      <p>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={ops}
          sx={{ width: 500 }}
          renderInput={(params) => <TextField {...params} label="선택하세요" />}
        />
      </p>
      <p>
        <DataTable />
      </p>
      <p>
        <SimpleBarChart />
      </p>
      <p>
        <DateCalendarValue />
      </p>
    </div>
  );
}

function DataTable() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

function SimpleBarChart() {

  const [chartWidth, setChartWidth] = useState(600);

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    '서울',
    '경기',
    '강원',
    '충청',
    '전라',
    '경상',
    '제주',
  ];

  return (
    <>
      <BarChart
        width={chartWidth}
        height={400}
        series={[
          { data: pData, label: '남성', id: 'pvId' },
          { data: uData, label: '여성', id: 'uvId' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
      <p>
        <Button variant="contained" onClick={()=>setChartWidth(chartWidth+100)}>넓게</Button>
        <Button variant="contained" onClick={()=>setChartWidth(chartWidth-100)}>좁게</Button>
      </p>
    </>
  );
}

function DateCalendarValue() {
  const [value, setValue] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem label="Uncontrolled calendar">
          <DateCalendar defaultValue={dayjs()} />
        </DemoItem>
        <DemoItem label="Controlled calendar">
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}