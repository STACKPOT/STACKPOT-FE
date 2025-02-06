import { InfoIcon, PinIcon } from "@assets/svgs";
import { Popper } from "@mui/material";
import { container, contentStyle, pinStyle, iconStyle } from "./InformationPopper.style";
import { useState } from "react";

interface InformationPopperProps {
    children: string;
    marginBottom: string;
}
const InformationPopper: React.FC<InformationPopperProps> = ({ children, marginBottom }: InformationPopperProps) => {
    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
    const openPopover = Boolean(anchorEl)
    const handleClickInformation = (e: React.MouseEvent<SVGSVGElement>) => {
        setAnchorEl(anchorEl ? null : e.currentTarget)
    }
    return (
        <>
            <InfoIcon type="button" css={iconStyle} onClick={handleClickInformation} />
            <Popper
                open={openPopover}
                anchorEl={anchorEl}
                placement="top"
                modifiers={[
                    {
                        name: 'flip',
                        enabled: false,
                        options: {
                            altBoundary: true,
                            rootBoundary: 'document',
                            padding: 8,
                        },
                    },
                ]}>
                <div css={container(marginBottom)}>
                    <p css={contentStyle}>{children}</p>
                    <PinIcon css={pinStyle} />
                </div>
            </Popper>
        </>
    )
}
export default InformationPopper;