
export interface Device {
    imei?: null | undefined | string;
    mobileNumber?: null | undefined | string;
    manufacturerName?: null | undefined | string;
    uuid?: null | undefined | string;
    isAssociated?: null | undefined | string;
    isDeleted?: null | undefined | string;
    createTime?: null | undefined | number;
    updateTime?: null | undefined | number;
    groups?: null | undefined | string[];
    orgId?: null | undefined | string;
    status?: null | undefined | string;
    sharedWith?: null | undefined | string[];
    isSuspended?: null | undefined | boolean;
    type?: null | undefined | string;
    attachedResourceId?: null | undefined | string;
    attachedResourceNumber?: null | undefined | string;
    usedBy?: null | undefined | string;
}