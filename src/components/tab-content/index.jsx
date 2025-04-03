import Box from '@mui/material/Box';

export default function TabContent(props) {
  const { children, value, index } = props;

  return (
    <div
      hidden={value !== index}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}