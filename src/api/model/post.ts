/**
 * web-backend-swagger
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Post { 
    author: number;
    body: string;
    id: number;
    thread: number;
    publishedAt: string;
    reaction: Array<number>;
    isNew: boolean;
}