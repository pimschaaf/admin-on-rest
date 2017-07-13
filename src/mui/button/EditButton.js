import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shouldUpdate from 'recompose/shouldUpdate';
import compose from 'recompose/compose';
import FlatButton from 'material-ui/FlatButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const EditButton = ({ basePath = '', label = 'aor.action.edit', style = {overflow: 'inherit'}, record = {}, translate, options = {} }) => <FlatButton
    primary
    label={label && translate(label)}
    icon={<ContentCreate />}
    containerElement={<Link to={linkToRecord(basePath, record.id)} />}
    style={style}
    {...options}
/>;

EditButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    style: PropTypes.object,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
    options: PropTypes.object,
};

const enhance = compose(
    shouldUpdate((props, nextProps) =>
        (props.record
        && props.record.id !== nextProps.record.id
        || props.basePath !== nextProps.basePath)
        || (props.record == null && nextProps.record != null)
    ),
    translate,
);

export default enhance(EditButton);
