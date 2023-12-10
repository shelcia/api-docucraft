import PropTypes from "prop-types";

import { Card, Divider, Icon, Menu, MenuItem } from "@mui/material";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import { useState } from "react";
import SoftButton from "components/SoftButton";
import { NavLink } from "react-router-dom";

// Custom styles for ComplexProjectCard
const ProjectCard = ({
  color,
  image,
  title,
  dateTime,
  description,
  members,
  dropdown,
}) => {
  //   const renderMembers = members.map((member, key) => {
  //     const memberKey = `member-${key}`;

  //     return (
  //       <SoftAvatar
  //         key={memberKey}
  //         src={member}
  //         alt="member profile"
  //         size="xs"
  //         sx={({ borders: { borderWidth }, palette: { white } }) => ({
  //           border: `${borderWidth[2]} solid ${white.main}`,
  //           cursor: "pointer",
  //           position: "relative",

  //           "&:not(:first-of-type)": {
  //             ml: -1.25,
  //           },

  //           "&:hover, &:focus": {
  //             zIndex: "10",
  //           },
  //         })}
  //       />
  //     );
  //   });

  const [moreMenu, setMoreBotMenu] = useState(null);

  const openMenu = (event) => setMoreBotMenu(event.currentTarget);
  const closeMenu = () => setMoreBotMenu(null);

  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
    >
      <MenuItem onClick={close}>Edit</MenuItem>
      <MenuItem onClick={close}>Publish/UnPublish</MenuItem>
      <Divider />
      <MenuItem onClick={close} sx={{ color: "red" }}>
        Delete
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Card>
        <SoftBox p={2}>
          <SoftBox display="flex" alignItems="center">
            <SoftAvatar
              src={image}
              alt={title}
              size="xl"
              variant="rounded"
              bgColor={color}
              sx={{ p: 1 }}
            />
            <SoftBox ml={2} lineHeight={0}>
              <SoftBox mb={1} lineHeight={0}>
                <SoftTypography
                  variant="h6"
                  textTransform="capitalize"
                  fontWeight="medium"
                >
                  {title}
                </SoftTypography>
              </SoftBox>
              {/* {members.length > -1 ? (
              <SoftBox display="flex">{renderMembers}</SoftBox>
            ) : null} */}
            </SoftBox>
            <SoftTypography
              color="secondary"
              onClick={openMenu}
              sx={{
                ml: "auto",
                alignSelf: "flex-start",
                py: 1.25,
              }}
            >
              <Icon fontSize="default" sx={{ cursor: "pointer" }}>
                more_vert
              </Icon>
            </SoftTypography>

            {renderMenu(moreMenu, closeMenu)}
          </SoftBox>
          <SoftBox my={2} lineHeight={1}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              {description}
            </SoftTypography>
          </SoftBox>
          <Divider />
          <SoftBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {dateTime ? (
              <SoftBox display="flex" flexDirection="column" lineHeight={0}>
                <SoftTypography variant="button" fontWeight="medium">
                  {dateTime}
                </SoftTypography>
                <SoftTypography
                  variant="button"
                  fontWeight="medium"
                  color="secondary"
                >
                  Last Edited
                </SoftTypography>
              </SoftBox>
            ) : null}
            <NavLink to="/docs/:id">
              <SoftButton color="secondary" size="small">
                View
              </SoftButton>
            </NavLink>
          </SoftBox>
        </SoftBox>
      </Card>
    </>
  );
};

ProjectCard.defaultProps = {
  color: "light",
  dateTime: "",
  members: [],
  dropdown: false,
};

ProjectCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.string),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ProjectCard;
