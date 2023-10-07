import React, { useState } from "react";
import * as css from "../Styles/PaginationStyles";
import { Box, Button, Text, Input, ButtonGroup } from "@chakra-ui/react";
import {
  EditIcon,
  ExternalLinkIcon,
  PlusSquareIcon,
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { InnerCont } from "../Styles/PaginationStyles";

interface PaginationType {
  totalPages: number;
  page: number;
  limit: number;
  setPage: any;
}

const Pagination = ({ totalPages, page, limit, setPage }: PaginationType) => {
  const NumberOfPages = Math.ceil(totalPages / limit);
  const [gotoVal, setGotoVal] = useState<any>("");

  const GotoChange = (val: number) => {
    if (val <= NumberOfPages) {
      setGotoVal(val);
    } else if (val == 0) {
      setGotoVal("");
    }
  };

  const handleGotoClick = () => {
    setPage(Number(gotoVal));
    setGotoVal("");
  };

  return (
    <Box css={css.OuterBox}>
      <InnerCont>
        <Box css={css.PagesCont}>
          <Button
            css={css.NextPrevBtn}
            isDisabled={page <= 1}
            onClick={() => setPage((prev: number) => prev - 1)}
          >
            <ArrowLeftIcon css={css.ArrowIconsCss} />
          </Button>
          <Box css={css.PageDisplayCont}>
            <Text style={{ color: "#f1f1ef" }}>{page}</Text>
            <Text>of</Text>
            <Text>{NumberOfPages}</Text>
          </Box>
          <Button
            css={css.NextPrevBtn}
            isDisabled={page >= NumberOfPages}
            onClick={() => setPage((prev: number) => prev + 1)}
          >
            <ArrowRightIcon css={css.ArrowIconsCss} />
          </Button>
        </Box>

        <Box css={css.GoToCont}>
          {gotoVal && (
            <Button css={css.GoToBtn} onClick={handleGotoClick}>
              Go To
            </Button>
          )}
          <Input
            css={gotoVal == "" ? css.GoToInputEmpty : css.GoToInput}
            value={gotoVal}
            type="number"
            onChange={(e) => GotoChange(Number(e.target.value))}
            placeholder="Go To Page"
          />
        </Box>
      </InnerCont>
    </Box>
  );
};

export default Pagination;
