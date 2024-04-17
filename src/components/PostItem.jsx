import React from "react";
import {
  Avatar,
  Badge,
  Card,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes/dist/cjs/index.js";
import { ChatBubbleIcon, HeartIcon } from "@radix-ui/react-icons";

function PostItem() {
  return (
    <Card mb="4">
      <Flex direction="column" gap="3">
        <Flex gap="2" align="center">
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            size="4"
            radius="full"
          />
          <Flex gap="1" direction="column">
            <Text size="3" weight="bold">
              JEEHWAN
            </Text>
            <Text size="1">2024.04.04.</Text>
          </Flex>
        </Flex>
        <Separator size="4" />
        <Flex direction="column" gap="2">
          <Heading>HELLO I'm TITLEsdsdsdsd</Heading>
          <Flex gap="2">
            <Badge>Devops</Badge>
            <Badge>UI</Badge>
          </Flex>
          <Text truncate>
            HELLO I'm
            CONTENTS,,,,,,ddddddddddddddddddddddddddddddddddddddddddddddddddqwdqsdqsdqsdqsdqsdqsdqsdqsdqsdqsd
          </Text>
          <Flex pt="1" justify="between">
            <Flex align="center">
              <ChatBubbleIcon />
              <Text ml="2" size="1">
                3 Comments
              </Text>
            </Flex>
            <Flex align="center">
              <HeartIcon />
              <Text ml="2" size="1">
                3
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

export default PostItem;
