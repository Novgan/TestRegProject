import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomSelect from "./Select";
import { SEX } from "../../../../shared/constants/common";

export default {
    title: "uiKit/Select",
    component: CustomSelect,
    argTypes: {
        options: {
            defaultValue: SEX,
            type: Array<{ value: string | number; label: string }>,
        },
    },
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = args => <CustomSelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
