import { InfoIcon } from "@assets/svgs";
import { Popper } from "@mui/material";
import { container, contentStyle, iconStyle, arrowStyle } from "./InformationPopper.style";
import { useState } from "react";

interface InformationPopperProps {
    children: React.ReactNode;
}

const InformationPopper: React.FC<InformationPopperProps> = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    const openPopover = Boolean(anchorEl) && isVisible;

    const handleClickInformation = (e: React.MouseEvent<SVGSVGElement>) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
        setIsVisible(true);
    };

    const handleClose = () => setIsVisible(false);

    return (
        <>
            <InfoIcon type="button" css={iconStyle} onClick={handleClickInformation} />
            <Popper
                open={openPopover}
                anchorEl={anchorEl}
                placement="bottom"
                modifiers={[
                    {
                        name: "offset",
                        options: {
                            offset: [148, 5],
                        },
                    },
                ]}
            >
                <div css={container}>
                    <div css={arrowStyle} />
                    <p css={contentStyle}>
                        {children}
                        <button
                            onClick={handleClose}
                            style={{
                                background: "none",
                                border: "none",
                                color: "white",
                                fontSize: "1.6rem",
                                position: "absolute",
                                top: "0.8rem",
                                right: "1.2rem",
                                cursor: "pointer",
                            }}
                            aria-label="close"
                        >
                            ✕
                        </button>
                    </p>
                </div>
            </Popper>
        </>
    );
};

export default InformationPopper;