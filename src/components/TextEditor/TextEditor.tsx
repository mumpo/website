import React, { FC, useContext } from 'react';
import styled, { DefaultTheme, ThemeContext } from 'styled-components';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { style } from './style';

SyntaxHighlighter.registerLanguage('typescript', typescript);

const Container = styled.div`
  color: #dcdfe2;
  background: #31394a;
`;

const Footer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  color: #717a84;
  background: ${props => props.theme.toolBar.background};
  flex-direction: row-reverse;
  padding:0 20px;
  border-top: 1px solid ${props => props.theme.toolBar.border};
`;

const FooterLanguage = styled.span`
  transition: color .2s ease-in-out;
  &:hover {
    color: #ddd;
  }
`;

interface TextEditorProps {
  code: string;
  language: string;
}

const TextEditor: FC<TextEditorProps> = ({ code, language}) => {
  const theme = useContext<DefaultTheme>(ThemeContext);

  return (
    <Container>
      <SyntaxHighlighter
        language="typescript"
        style={style(theme)}
        showLineNumbers={true}
        lineNumberContainerStyle={{
          color: theme.panel.fontColor,
          background: theme.panel.background,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
        lineNumberStyle={{
          width: '50px',
          height: '25px'
        }}
        wrapLines={true}
        lineProps={{
          style: {
            width: '100%',
            padding: "0 0.5em",
          }
        } as React.HTMLAttributes<HTMLElement>}
      >
        {code}
      </SyntaxHighlighter>
      <Footer>
        <FooterLanguage>
          {language}
        </FooterLanguage>
      </Footer>
    </Container>
  );
};

export default TextEditor;
