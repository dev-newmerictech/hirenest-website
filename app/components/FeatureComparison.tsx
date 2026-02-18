"use client";

import {
  Box,
  Container,
  Text,
  Heading,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableColumnHeader,
  TableCell,

  Icon,
} from "@chakra-ui/react";
import { Check, X } from "lucide-react";

interface ComparisonFeature {
  feature: string;
  [key: string]: string | boolean;
}

interface FeatureComparisonSectionProps {
  id?: string;
  label?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  columns: string[];
  features: ComparisonFeature[];
  highlightColumn?: string;
  bg?: string;
}

export default function FeatureComparisonSection({
  id = "comparison",
  label = "COMPARISON",
  title = "Why Founders Choose",
  highlightText = "Our Product",
  description = "See how we compare against others.",
  columns,
  features,
  highlightColumn,
  bg = "gray.50",
}: FeatureComparisonSectionProps) {
  //   const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box id={id} py={{ base: 12, md: 16 }} bg={bg} w="full">
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        {/* Header Section */}
        <Box textAlign="center" maxW="4xl" mx="auto" mb={12}>
          {label && (
            <Text
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="2px"
              color="#09090b"
              mb={2}
              textTransform="uppercase"
            >
              {label}
            </Text>
          )}

          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="medium"
            color="#18181b"
            lineHeight="short"
          >
            {title}{" "}
            {highlightText && (
              <Box as="mark" bg="transparent" color="#4241ff" fontWeight="bold">
                {highlightText}
              </Box>
            )}
          </Heading>

          {description && (
            <Text
              fontSize="lg"
              mt={3}
              color="#52525b"
              maxW="2xl"
              mx="auto"
            >
              {description}
            </Text>
          )}
        </Box>

        {/* Table Section */}
        <Box
          overflowX="auto"
          borderWidth="1px"
          //   borderColor={borderColor}
          rounded="2xl"
          bg="white"
          tabIndex={0}
          role="region"
          aria-label="Feature comparison table"
        >
          <Table.Root size="md" striped>
            <TableHeader >
              <TableRow bg="#4241ff" color={"white"}>
                <TableColumnHeader fontWeight="bold" textTransform="none" color={"white"}>
                  Features
                </TableColumnHeader>
                {columns.map((col) => (
                  <TableColumnHeader
                    key={col}
                    color={"white"}
                    fontWeight="bold"
                    textAlign="center"
                    textTransform="none"
                  // color={col === highlightColumn ? "#4241ff" : "#18181b"}
                  >
                    {col}
                  </TableColumnHeader>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {features.map((row, index) => (
                <TableRow key={index} borderBottomWidth="1px">
                  <TableCell fontWeight="medium" color="#18181b">
                    {row.feature}
                  </TableCell>

                  {columns.map((col) => {
                    const value = row[col];

                    const renderValue = () => {
                      if (value === true)
                        return (
                          <Icon
                            color="green.500"
                            boxSize={5}
                          >
                            <Check />
                          </Icon>
                        );
                      if (value === false)
                        return (
                          <Icon color="red.400" boxSize={5} ><X /></Icon>
                        );
                      return (
                        <Text
                          fontWeight={
                            col === highlightColumn ? "semibold" : "normal"
                          }
                          color={
                            col === highlightColumn ? "#4241ff" : "gray.700"
                          }
                        >
                          {value}
                        </Text>
                      );
                    };

                    return (
                      <TableCell
                        key={col}
                        textAlign="center"

                      >
                        {renderValue()}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table.Root>
        </Box>
      </Container>
    </Box>
  );
}