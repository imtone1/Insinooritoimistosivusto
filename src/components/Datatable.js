import React from 'react';
import { DataGrid, GridToolbar, fiFI, gridClasses } from '@mui/x-data-grid';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { COLORS } from '../values/colors';
import { PROJECTS } from '../values/referenssi';


// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.grey[500], ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.grey[500],
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
            theme.palette.grey[700],
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));
  




// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];



  const projectsWithId = PROJECTS.map((project, index) => {
    const projectId = index + 1;
    return { id: projectId, ...project };
  });

  function ExpandableCell({ value }) {
    const [expanded, setExpanded] = React.useState(false);
  
    return (
      <Box>
        {expanded ? value : value.slice(0, 39)}&nbsp;
        {value.length > 29 && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            type="button"
            component="button"
            sx={{ fontSize: 'inherit' }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'vähemmän' : 'lisää'}
          </Link>
        )}
      </Box>
    );
  }
const columns1 = [
    { field: 'Kiinteiston_nimi',  headerClassName: 'super-app-theme--header',headerName: 'Kiinteiston_nimi', width: 200,  filterable: false},
    { field: 'Tehtava',  headerClassName: 'super-app-theme--header',headerName: 'Tehtava', width: 250 },
    { field: 'Vaativuusluokka', headerClassName: 'super-app-theme--header', headerName: 'Vaativuusluokka', width: 150 },
    { field: 'Rakennustyyppi', headerClassName: 'super-app-theme--header', headerName: 'Rakennustyyppi', width: 150 },
    { field: 'Laajuus', headerClassName: 'super-app-theme--header', headerName: 'Laajuus', type: 'number', width: 120 ,  filterable: false},
    { field: 'Paikka', headerClassName: 'super-app-theme--header', headerName: 'Paikka', width: 120 ,  filterable: false},
    { field: 'Vuosi',  headerClassName: 'super-app-theme--header',headerName: 'Vuosi',type: 'year', width: 80 },
  ];
  
export default function Datatable() {
   
    

  return (
    <div style={{ justifyContent:'center',width: '100%' }}>
      <StripedDataGrid
     
        rows={projectsWithId}
        columns={columns1}
        getEstimatedRowHeight={() => 100}
        getRowHeight={() => 'auto'}
        
        localeText={fiFI.components.MuiDataGrid.defaultProps.localeText} 
       autoHeight
        
          columnBuffer={2} columnThreshold={2}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 10 },
        //   },
        // }}
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
        rowsPerPageOptions={[10, 20, 30]}
       pageSize={20}
       
        slots={{
            toolbar: GridToolbar,
          }}
        

         
          slotProps={{ toolbar: {  printOptions: { disableToolbarButton: true },
          csvOptions: { disableToolbarButton: true }, } }} 
          sx={{
            '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
              py: 1,
            },
            '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
              py: '15px',
            },
            '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
              py: '22px',
            }, fontSize: '80%', fontWeight: 100 , '& .super-app-theme--header': {
                backgroundColor: COLORS.vihrea,
              },
          }}
      />
    </div>
  );
}