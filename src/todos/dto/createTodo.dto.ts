import {ApiModelProperty} from '@nestjs/swagger';
export class createTodoDto{
    @ApiModelProperty()
    readonly _id: number;
    @ApiModelProperty()
    readonly text: string;
    @ApiModelProperty()
    readonly complete: boolean;
    
}
