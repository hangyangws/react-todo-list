/**
 * 全局通用的类型定义
 */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IProps {
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
  className?: string;
}

export interface IRoutedProps extends IProps, RouteComponentProps {}
