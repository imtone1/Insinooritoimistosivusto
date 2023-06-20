import React from 'react';
import { DataGrid, GridToolbar, fiFI, gridClasses } from '@mui/x-data-grid';
import { styled, alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import { COLORS } from '../values/colors';
import { PROJECTS } from '../values/referenssi';




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
  


  const projectsWithId = PROJECTS.map((project, index) => {
    const projectId = index + 1;
    return { id: projectId, ...project };
  });

  // function ExpandableCell({ value }) {
  //   const [expanded, setExpanded] = React.useState(false);
  
  //   return (
  //     <Box>
  //       {expanded ? value : value.slice(0, 39)}&nbsp;
  //       {value.length > 29 && (
  //         // eslint-disable-next-line jsx-a11y/anchor-is-valid
  //         <Link
  //           type="button"
  //           component="button"
  //           sx={{ fontSize: 'inherit' }}
  //           onClick={() => setExpanded(!expanded)}
  //         >
  //           {expanded ? 'vähemmän' : 'lisää'}
  //         </Link>
  //       )}
  //     </Box>
  //   );
  // }
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
       initialState={{
        
        pagination: { paginationModel: { pageSize: 10 } },
      }}
          columnBuffer={2} columnThreshold={2}
      
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          pageSizeOptions={[10, 30, 50]}
      
       
        slots={{
            toolbar: GridToolbar,
          }}
        

         id="datatable"
          slotProps={{ toolbar: {  printOptions: { disableToolbarButton: true },
          csvOptions: { disableToolbarButton: true } } }} 
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