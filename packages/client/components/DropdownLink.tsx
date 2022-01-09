import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  List,
  ListItem,
  ListIcon,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { capitalize, uniqBy } from "lodash";

type Props = {
  title: string;
  data: {
    id: string;
    modelName: string;
    classification: {
      name: string;
    };
    remark: string;
  }[];
};

const DropdownLink = ({ data: vehicles, title }: Props) => {
  const initRef = React.useRef(null);

  const uniqVehicleByClass = uniqBy(vehicles, "classification.name");

  return (
    <Popover isLazy initialFocusRef={initRef}>
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <Button
              variant="ghost"
              rightIcon={!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            >
              {capitalize(title)}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontWeight="semibold">
              Search {title} deals
            </PopoverHeader>
            <PopoverBody>
              <List spacing={3}>
                {uniqVehicleByClass.map((vehicle) => {
                  const { name } = vehicle.classification;

                  return (
                    <ListItem key={vehicle.id}>
                      <Link passHref href={`/${title}/${name}`}>
                        <chakra.a
                          style={{ cursor: "pointer" }}
                          _hover={{ color: "teal.500" }}
                        >
                          <ListIcon as={ChevronRightIcon} />
                          {`${capitalize(title)} ${capitalize(name)} Listing`}
                        </chakra.a>
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default DropdownLink;
