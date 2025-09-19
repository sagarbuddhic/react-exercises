import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(5),
    color: theme.palette.text.primary,
    fontSize: "18px",
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
      cursor: "pointer",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

// Breadcrumb with buttons and icons.
const BreadcrumbButtons = (props) => {
  let { breadcrumbs, handleBreadcrumbClick } = props;

  return (
    <div class="breadcrumb-buttons-wrapper" role="presentation">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs?.map((breadcrumb, index) => {
          let { label, icon } = breadcrumb;
          return (
            <StyledBreadcrumb
              onClick={(event) => {
                handleBreadcrumbClick(label);
              }}
              // disabled={breadcrumbs?.length - 1 === index ? true : false}
              label={label}
              icon={icon}
            />
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbButtons;
