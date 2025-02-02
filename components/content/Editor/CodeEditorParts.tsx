import { defineComponent, renderSlot, h } from "vue"
import { BoxProps, chakra, CButton } from "@chakra-ui/vue-next"

export const CodeContainer = defineComponent({
  name: "CodeContainer",
  setup(props, { attrs, slots }) {
    return () => {
      return (
        <chakra.div
          p="3"
          pt="5"
          rounded="8px"
          my="8"
          bg="#011627"
          color="#eee"
          {...attrs}
        >
          {slots}
        </chakra.div>
      )
    }
  },
})

export const CopyButton = defineComponent({
  name: "CopyButton",
  setup(props: any, { attrs, slots }) {
    return () => {
      return (
        <CButton
          size="sm"
          position="absolute"
          textTransform="uppercase"
          colorScheme="emerald"
          fontSize="xs"
          height="24px"
          top={0}
          zIndex="1"
          right="1.25em"
          {...attrs}
        >
          {renderSlot(slots, "default")}
        </CButton>
      )
    }
  },
})

export const EditableNotice = defineComponent({
  name: "EditableNotice",
  setup(_, { attrs }) {
    return () => {
      return (
        <chakra.div
          position="absolute"
          width="full"
          top="-1.25em"
          left="0"
          roundedTop="8px"
          bg="#011627"
          py="2"
          zIndex="0"
          letterSpacing="wide"
          color="gray.400"
          fontSize="xs"
          fontWeight="semibold"
          textAlign="center"
          textTransform="uppercase"
          pointerEvents="none"
          {...attrs}
        >
          Editable Example
        </chakra.div>
      )
    }
  },
})
