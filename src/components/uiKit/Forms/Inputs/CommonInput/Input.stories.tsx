import Input from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "uiKit/Inputs",
    component: Input,
    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
        startIcon: {
            table: {
                disable: true,
            },
        },
        endIcon: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
