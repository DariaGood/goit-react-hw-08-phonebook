import { Box } from 'components/styles/Element.styled';
import { RevolvingDot } from 'react-loader-spinner';

export const Loader = () => (
  <Box>
    <RevolvingDot
      height="100"
      width="100"
      radius="25"
      color="#4fa94d"
      secondaryColor=""
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </Box>
);
