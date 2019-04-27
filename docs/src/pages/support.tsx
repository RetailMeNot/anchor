// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import { Page } from '../components/Layout';
import { Typography } from '../../../src';
// THEME
import { sizes } from '../../../src/theme';

const StyledSupportPage = styled.div`
    padding: ${sizes.padding.md} ${sizes.padding.lg};
`;

export const SupportPage = (): React.ReactElement<any> => (
    <Page>
        <StyledSupportPage>
            <Typography weight={600} tag="h1">
                Support
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="code">This is a code block</Typography>
            <Typography tag="h2" weight={600}>
                This is a subheader
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="blockquote">
                This is a quote block used for important notes to the user.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque odio tellus, auctor vel porttitor quis, posuere in
                libero. Morbi luctus turpis vitae felis feugiat, eu consequat
                purus ultrices.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
            <Typography tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget turpis scelerisque, euismod turpis eget, pretium tortor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris hendrerit lorem erat, quis
                pellentesque leo facilisis et. Nam bibendum eros non lectus
                efficitur, nec mattis enim molestie. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam ac diam et lorem sodales
                convallis quis in massa. Etiam ut lacus et massa gravida
                condimentum. Sed sodales pulvinar sem in fringilla. Cras
                interdum orci non malesuada pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer imperdiet viverra
                nulla, in varius nulla sodales eu. Phasellus varius nulla id leo
                ultricies, vel semper urna ultricies. Integer nisl ante, varius
                vitae venenatis eu, suscipit in leo. Duis imperdiet posuere
                elit, a malesuada tortor ullamcorper eu. Nam vestibulum mauris
                quis mi commodo semper. Praesent volutpat, urna ut blandit
                aliquet, magna turpis pretium ex, vel eleifend nulla diam ac
                nibh.
            </Typography>
        </StyledSupportPage>
    </Page>
);

export default SupportPage;
